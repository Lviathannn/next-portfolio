import { gitHubUrl } from "@/constants/baseURL";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: new HttpLink({
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
      },
      uri: gitHubUrl,
      fetchOptions: {
        next: {
          revalidate: 60,
        },
      },
    }),
    cache: new InMemoryCache(),
  });
});
