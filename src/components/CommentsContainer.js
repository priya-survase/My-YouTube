import React from "react";

const commentsData = [
  {
    name: "Priya Survase",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Priya Survase",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [
          {
            name: "Priya Survase",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            replies: [
              {
                name: "Priya Survase",
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                replies: [
                  {
                    name: "Priya Survase",
                    comment:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Priya Survase",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Priya Survase",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [
          {
            name: "Priya Survase",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
        ],
      },
    ],
  },
  {
    name: "Priya Survase",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Priya Survase",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
  },
  {
    name: "Priya Survase",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Priya Survase",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
  },
  {
    name: "Priya Survase",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Priya Survase",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
  },
  {
    name: "Priya Survase",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Priya Survase",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="m-3 flex">
      <img
        className="w-10 h-10 m-1"
        src="https://th.bing.com/th?id=OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      />
      <div className="bg-slate-200">
        <div className="font-bold ">{name}</div>
        <div>{comment}</div>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((item, index) => {
        return (
          <div>
            <Comment key={index} data={item} />
            <div className="ml-5 border border-l-black">
              {item.replies && <CommentsList comments={item.replies} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="p-3">
      <h1 className="text-xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
