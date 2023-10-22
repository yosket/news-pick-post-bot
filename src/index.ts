import OpenAI from 'openai'

require('dotenv').config()

const openai = new OpenAI({
  organization: process.env.OPEN_AI_ORGANIZATION,
  apiKey: process.env.OPEN_AI_API_KEY,
})

async function generateText(prompt: string): Promise<string | null> {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  })
  return chatCompletion.choices[0].message.content
}

// 使用例
generateText('Say this is a test')
  .then((generatedText) => console.log(generatedText))
  .catch((error) => console.error(error))
