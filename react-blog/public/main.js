import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirPath = path.join(__dirname, '../src/content');
const dirPathPages = path.join(__dirname, '../src/pages/content');
let postlist = [];
let pagelist = [];

const getPosts = async () => {
    try {
        const files = await fs.promises.readdir(dirPath);

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            let obj = {};
            let post;

            const data = await fs.promises.readFile(`${dirPath}/${file}`, 'utf8');

            const getMetaDataIndices = (acc, line, index) => {
                if (line.startsWith('---')) {
                    if (acc.length % 2 === 0) {
                        acc.push(index);
                    } else {
                        acc.push(index);
                    }
                }
                return acc;
            };

            const parseMetadata = ({ lines, metaDataIndices }) => {
                if (metaDataIndices.length > 0) {
                    let metadata = lines.slice(metaDataIndices[0] + 1, metaDataIndices[1]);
                    metadata.forEach(line => {
                        obj[line.split(': ')[0]] = line.split(': ')[1];
                    })
                    return obj;
                }
            };

            const parseContent = ({ lines, metaDataIndices }) => {
                if (metaDataIndices.length > 0) {
                    lines = lines.slice(metaDataIndices[1] + 1), lines.length;
                }
                return lines.join('\n');
            }

            const lines = data.split('\n');
            const metaDataIndices = lines.reduce(getMetaDataIndices, []);
            const metadata = parseMetadata({lines, metaDataIndices});
            const content = parseContent({lines, metaDataIndices});
            const date = new Date(metadata.date);
            const timestamp = date.getTime() / 1000;

            post = {
                id: timestamp,
                title: metadata.title ? metadata.title : `No title provided`,
                date: metadata.date ? metadata.date : "No date provided",
                author: metadata.author ? metadata.author : "Unknown",
                content: content ? content : "No content provided"
            }; 

            postlist.push(post);
        }

    } catch (err) {
        console.error('getPost error:', err);
    }

    const sortedList = postlist.sort((a, b) => {
        return a.id < b.id ? 1 : -1;
    });
    console.log(sortedList);
    let data = JSON.stringify(sortedList);
    fs.writeFileSync("src/posts.json", data, 'utf8')
};

const getPages = async () => {
    try {
        const files = await fs.promises.readdir(dirPathPages);

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            let page;

            const data = await fs.promises.readFile(`${dirPathPages}/${file}`, 'utf8');

            //console.log(data);
            page = {
                filename: file,
                content: data
            };
            pagelist.push(page);
        }

    } catch (err) {
        console.error('getPages error:', err);
    }

    let data = JSON.stringify(pagelist);
    fs.writeFileSync("src/pages.json", data, 'utf8')
};

getPosts();
getPages();