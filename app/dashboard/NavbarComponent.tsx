"use client";
import React, { Children } from "react";
import {
  Navbar,
  AppShell,
  Text,
  Container,
  Group,
  Alert,
  SimpleGrid,
  Grid,
  Modal,
  Paper,
  Button,
  Badge,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import { User } from "./user";
import { Brand } from "./brand";
import { MainLinks } from "./mailinks";
import { IconMessage } from "@tabler/icons-react";

const code = `
import { Navbar } from '@mantine/core';

function Demo() {
  return (
    <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section>{/* Header with logo */}</Navbar.Section>
      <Navbar.Section grow mt="md">{/* Links sections */}</Navbar.Section>
      <Navbar.Section>{/* Footer with user */}</Navbar.Section>
    </Navbar>
  );
}
`;

export default function Navbarcomp() {
  const [opened, { open, close }] = useDisclosure();
  return (
    <AppShell
      navbar={
        <Navbar height="92vh" pt="lg" width={{ base: 200 }}>
          <Navbar.Section grow>
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Container style={{ paddingTop: "7%" }}>
        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: "62rem", cols: 3, spacing: "md" },
            { maxWidth: "48rem", cols: 2, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
          ]}
          pt="xl"
        >
          <Alert
            icon={<IconMessage size="1rem" />}
            title="Jumbe kidama"
            color="teal"
            variant="outline"
          >
            Something terrible happened! You made a mistake and there is no
            going back, your data was lost forever!
          </Alert>

          <Alert
            icon={<IconMessage size="1rem" />}
            title="Jumbe kidama"
            color="teal"
            variant="filled"
            onClick={open}
          >
            Something terrible happened! You made a mistake and there is no
            going back, your data was lost forever!
          </Alert>
        </SimpleGrid>

        <Modal
          opened={opened}
          onClose={close}
          title="Message"
          centered
          size="xl"
        >
          <Paper m="lg" radius="md" shadow="lg" p="md">
            <Group pb="md" position="left">
              <Badge size="lg" color="teal" variant="outline">
                Julius Marenga
              </Badge>
              <Badge size="lg" color="grape" variant="outline">
                marengajulius@gmail.com
              </Badge>
              <Badge size="lg" color="teal" variant="outline">
                +255763964553
              </Badge>
              <Badge size="lg" color="grape" variant="outline">
                GwTech
              </Badge>
              <Badge size="lg" variant="outline" color="teal">
                Medium
              </Badge>
              <Badge size="lg" variant="outline">
                1M-2M
              </Badge>
            </Group>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            minus soluta! Aliquam impedit omnis saepe eveniet molestias soluta,
            iusto quas quibusdam nesciunt blanditiis similique ratione
            accusantium cum ipsum sit vel!
            <Group pb="lg" pt="xl" position="center">
              <Button style={{ backgroundColor: "teal" }} size="md">
                Email sender
              </Button>
            </Group>
          </Paper>
        </Modal>
      </Container>
    </AppShell>
  );
}
