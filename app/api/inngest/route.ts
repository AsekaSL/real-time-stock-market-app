import { inngest } from '@/lib/inngest/client'
import { sendDailyNewsSummary, sendSignUpEmail } from '@/lib/inngest/functons'
import {serve} from 'inngest/next'

export const {GET, POST, PUT} = serve({
    client: inngest,
    functions: [sendSignUpEmail, sendDailyNewsSummary]
})