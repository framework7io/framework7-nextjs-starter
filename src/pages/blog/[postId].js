import { Block, Navbar, Page } from "framework7-react";

export default function BlogPost(props) {
  const { postId, f7route } = props;
  return (
    <Page>
      <Navbar title="Post" backLink="Back" />
      <Block strong>
        <p>This is a dynamic route loaded from <code>/blog/[postId].js</code> page component.</p>
        <p>Route URL: <b>{f7route.url}</b></p>
        <p>Post ID: <b>{postId}</b></p>
      </Block>
    </Page>
  )
}