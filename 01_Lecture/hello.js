import {OpenAI} from 'openai';

const client = new OpenAI({
    apikey:'',

})

client.chat.completions.create({
    model: 'gpt-4',
    messages: [{
        role: 'user',
        content: 'Hello, How are you?'
    }]
}).then(response => {
    console.log(response.choices[0].message.content);
})