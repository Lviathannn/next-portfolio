import { gitHubUrl, hygraphUrl, leetCodeUrl } from "@/constants/baseURL";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { MultiAPILink } from "@habx/apollo-multi-endpoint-link";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: ApolloLink.from([
      new MultiAPILink({
        endpoints: {
          hygraph: hygraphUrl,
          gitHub: gitHubUrl,
          leetCode: leetCodeUrl,
        },
        getContext: (endpoint) => {
          if (endpoint === "gitHub") {
            return {
              headers: {
                authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
              },
            };
          }

          return {};
        },
        httpSuffix: "",
        createHttpLink: () =>
          createHttpLink({
            fetchOptions: {
              next: { revalidate: 60 },
            },
          }),
      }),
    ]),
    cache: new InMemoryCache(),
  });
});
