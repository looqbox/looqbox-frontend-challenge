import { HttpResponse, graphql, http } from "msw";

// Mock Data
export const posts = [
  {
    userId: 1,
    id: 1,
    title: "first post title",
    body: "first post body",
  },
  {
    userId: 2,
    id: 5,
    title: "second post title",
    body: "second post body",
  },
  {
    userId: 3,
    id: 6,
    title: "third post title",
    body: "third post body",
  },
];

const jsonPlaceHolder = graphql.link("https://jsonplaceholder.ir/graphql");

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/posts", () => {
    return HttpResponse.json(posts, { status: 200 });
  }),

  jsonPlaceHolder.query("posts", () => {
    return HttpResponse.json({
      data: { posts },
    });
  }),
];
