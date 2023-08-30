"use client";

import React from "react";
import {
  Group,
  ActionIcon,
  useMantineColorScheme,
  Box,
  rem,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { Logo } from "./logo";

export function Brand() {
  //   const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `${rem(1)} solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      })}
    >
      <Group position="apart">
        <Logo colorScheme="dark" />
        <ActionIcon variant="default" size={30}>
          <IconMoonStars size="1rem" />
        </ActionIcon>
      </Group>
    </Box>
  );
}
