export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    console.log(data);
  } catch (e) {
    return Response.json({ status: true });
  }
};
