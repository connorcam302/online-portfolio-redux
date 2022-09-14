import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

export default function App() {
  const [variant, setVariant] = React.useState("static");

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  let themeIcon =  localStorage.getItem("theme") == "dark" ? <MdDarkMode/> : <MdLightMode/>

  const updateTheme = (switchStatus) => {
    setTheme(switchStatus  ? 'dark' : 'light')
    themeIcon = switchStatus ? <MdDarkMode/> : <MdLightMode/>
  }
  
  return (
    <Layout>
      <Navbar isBordered variant={variant} css={{width:"100%"}}>
      <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Connor Campbell
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
        {themeIcon}
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
          </Navbar.Content>
      </Navbar>
    </Layout>
  )
}
