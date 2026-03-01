import { toast } from '@/components/ui/sonner';

type CustomError = {
  status?: number;
  data?: {
    errors?:
    | {
      location?: string;
      message?: string;
      path?: string;
    }[]
    | string;
    message?: string;
    error?: string;
    body?: string;
  };
  message?: string;
  error?: string;
};

const handleResponseError = (err: CustomError) => {
  if (!err) return;

  // Prefer structured backend errors
  if (err.data) {
    const { message, errors, error, body } = err.data;

    if (Array.isArray(errors)) {
      errors.forEach((e) => {
        if (e?.message) toast.error(e.message);
      });
      return;
    }

    if (typeof errors === 'string' && errors.trim().length > 0) {
      toast.error(errors);
      return;
    }

    if (message) {
      toast.error(message);
      return;
    }

    if (error) {
      toast.error(error);
      return;
    }

    if (body) {
      toast.error(body);
      return;
    }
  }

  // Fallback: show top-level message/error/status
  const isDuplicate = err.status === 409 || err.status === 422 || err.message?.toLowerCase().includes("already");
  const fallback = isDuplicate ? "Email already subscribed" : (err.message ||
    err.error ||
    (err.status ? `Request failed with status ${err.status}` : undefined));

  if (fallback) {
    toast.error(fallback);
  } else {
    console.log(err);
  }
};

export default handleResponseError;
