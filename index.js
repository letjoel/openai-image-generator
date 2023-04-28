const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config()

const configuration = new Configuration({
    
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (prompt) => {
    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "256x256",
    });
    return response.data.data[0].url;
}

const image_url = generateImage("beautiful kitty up in a honey river");
image_url.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))
console.log(image_url);



module.exports = {
    openai
}


