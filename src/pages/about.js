import { Page, Navbar, Block, Link } from "framework7-react";

export default function About() {
  return (
    <Page>
      <Navbar title="About" backLink="Back" />

      <Block strong>
        <p>This is "About" page.</p>
        <p><Link back>Go back</Link></p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
          velit mollis, faucibus nisi ut, tempus eros. Vestibulum mattis libero
          pretium, hendrerit orci eget, finibus diam. Sed pharetra, sem vel
          gravida cursus, enim urna rutrum ante, eu bibendum mauris lorem vel
          erat. In fringilla velit in dignissim aliquam. Suspendisse vel dui et
          mauris rutrum vulputate eu vel magna. Pellentesque cursus ex in ipsum
          luctus, ullamcorper faucibus leo posuere. Sed scelerisque vestibulum
          felis quis viverra. Etiam in malesuada elit.
        </p>
      </Block>
    </Page>
  );
}
