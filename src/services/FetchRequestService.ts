import RequestService, { IOptions } from "./RequestService";

export default class extends RequestService {
  constructor() {
    super();
  }

  request(options: IOptions): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const port = options.port ? `:${options.port}` : "";
        const response = await fetch(`${options.protocol}//${options.hostname}${port}${options.path}`, {
          method: options.method,
        });

        resolve(await response.text());
      } catch (error: any) {
        reject(error);
      }
    });
  }
}
