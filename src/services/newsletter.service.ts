import { createMutation } from './api/mutation';

interface NewsletterResponse {
    message: string;
}

export const useSubscribeToNewsletter = createMutation<NewsletterResponse>({
    url: '/newsletter/subscribe',
    method: 'POST',
});
