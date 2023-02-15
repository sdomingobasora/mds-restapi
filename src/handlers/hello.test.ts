import { Response } from 'express';
import { helloHandler } from './hello';

describe('HelloRouter', () => {
  it('should return 200 status code', () => {
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    helloHandler(undefined, mockRes as unknown as Response);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(
      'Hello world! API Call number 1 since last restarted!',
    );
  });
});
