import { Page, Navbar, Block, theme, BlockTitle, List, ListItem, Link, Icon } from 'framework7-react';

export default function Home() {
  return (
    <Page>
      <Navbar title="Framework7 Next.js">
        <Link slot="left" panelOpen="left">
          <Icon ios="f7:menu" md="material:menu" />
        </Link>
      </Navbar>

      <Block strong>
        <p>Welcome to your Framework7 Next.js app!</p>
      </Block>
      <BlockTitle>Server-side device detection</BlockTitle>
      <Block strong>
        <p>Framework7 Next.js is capable to detect device on server-side (based on device user-agent).</p>
        <p>Current theme is <b>{theme.ios ? 'ios': 'md'}</b></p>
      </Block>
      <BlockTitle>Routing</BlockTitle>
      <List>
        <ListItem link="/about" title="About" />
        <ListItem link="/blog/45" title="Dynamic route" />
      </List>
    </Page>
  )
}
