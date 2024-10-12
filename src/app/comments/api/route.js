export async function GET() {
    return Response.json({
        // message: "Hello From Route file."
        comments
    })
};


export async function POST(request) {
  const newComment = await request.json();
  
  comments.push({
    "id": comments.length + 1,
    "text": newComment.text
  });

  return Response.json({
    message: "New Comment Added.",
    comments
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