interface ErrorResponse {
  err: {
    NotFound?: null;
  };
}

interface SuccessResponse {
  ok: any;
}

export function isError(response: any): response is ErrorResponse {
  return response && response.err !== undefined;
}

export function isSuccess(response: any): response is SuccessResponse {
  return response && response.ok !== undefined;
}
