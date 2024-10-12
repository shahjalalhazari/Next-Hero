export async function PATCH(request, { params }) {
  const body = await request.json()
  console.log(params.id);
  const index = comments.findIndex((c) => c.id === parseInt(params.id));

  comments[index] = {
    id: parseInt(params.id),
    text: body.text
  };

  return Response.json({
    message: "Comment updated.",
    comments
  });
};



export async function DELETE(request, { params }) {
  const newComments = comments.filter((c) => c.id !== parseInt(params.id));

  return Response.json({
    message: "Comment deleted.",
    newComments
  });
};


const comments = [
    {
        "id": 1,
        "text": "Comment 1"
    },
    {
        "id": 2,
        "text": "Comment 2"
    },
    {
        "id": 3,
        "text": "Comment 3"
    },
    {
        "id": 4,
        "text": "Comment 4"
    },
    {
        "id": 5,
        "text": "Comment 5"
    },
]