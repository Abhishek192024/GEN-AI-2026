import 'dotenv/config';

import OpenAI from "openai";

const client = new OpenAI();

// link .env file to your project and add your API key in it

async function init(){
    const result = await client.response.create(
        {
            model : '',
            input : 'Hii my name is Abhishek. can you help me?'
        }
    );
    console.log(result.output_text);
}