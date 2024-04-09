import { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  console.log(request);
  return Response.json({
    ok: true,
  });
};

export const POST = async (request: NextRequest) => {
  const data = await request.json();
  console.log(data);
  return Response.json(data);
};
