"use client";

import { Grid, Group, Text, Card, Paper } from "@mantine/core";
import Image from "next/image";
import { createStyles, rem } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  card: {
    height: rem(325),
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: rem(305),
    boxShadow: "0px 4px 27px 0px rgba(3, 95, 175, 0.18)",
  },
  card2: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: "24px",

    border: "1px solid var(--white, #FDFDFD)",
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.20) 100%)",
    gap: "24px",
    padding: "5%",
    boxShadow: "0px 4px 27px 0px rgba(3, 95, 175, 0.18)",
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));
const CompanyIntroduction = () => {
  return (
    <>
      <div
        style={{
          paddingLeft: "10%",
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <Grid align="center" gutterMd="xs">
          <Grid.Col xs={12} md={4}>
            <Intro />
          </Grid.Col>
          <Grid.Col xs={12} md={3}>
            <Vision />
          </Grid.Col>
          <Grid.Col xs={12} md={3}>
            <Mission />
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
};

let Intro = () => {
  const { classes } = useStyles();
  return (
    <>
      <Group pt="xl" pb="lg">
        <Text color="#232323" fz={40} fw={500}>
          Who we <span style={{ color: "#005BAA" }}>Are</span>
        </Text>
      </Group>
      <Group
        pt="lg"
        style={{
          fontFamily: "Poppins",
          fontSize: "18px",
          fontWeight: "400",
          color: "#636363",
        }}
      >
        <p>
          We are a team of engineers, developers and technology enthusiasts
          incorporated under Tanzanian companies Act of 2002.
        </p>
        <p>
          We pride ourselves on providing a comprehensive suite of solutions
          consisting of desktop and mobile application development, web
          development, computer networking, Cyber security services, DNS
          services, ICT consulting, research & development and ICT services
          outsourcing
        </p>
        <p>
          At Techcraft Technologies Ltd , we guarantee reliable solutions that
          work
        </p>
      </Group>
    </>
  );
};

let Vision = () => {
  const { classes } = useStyles();
  return (
    <>
      <Group p="lg">
        <Paper
          shadow="md"
          p="xl"
          radius="md"
          sx={{
            backgroundImage: `url("/images/intro/Rectangle 2.png")`,
          }}
          className={classes.card}
        ></Paper>
      </Group>
      <Group>
        <Card withBorder radius="md" className={classes.card2}>
          <Group position="left" pt="xl">
            <Image
              width={44}
              height={44}
              alt="holla"
              src="/images/intro/Frame (1).svg"
            />
          </Group>
          <Group>
            <Text color="#101010" fz={32} fw={400}>
              Vision
            </Text>
          </Group>
          <Group>
            <Text color="#636363" fz={18}>
              To be a technology company that creates digital solutions that
              solve problems in our society
            </Text>
          </Group>
        </Card>
      </Group>
    </>
  );
};

let Mission = () => {
  const { classes } = useStyles();
  return (
    <Group align="center">
      <Card withBorder radius="md" className={classes.card2}>
        <Group position="left" pt="xl">
          <Image
            width={44}
            height={44}
            alt="img"
            src="/images/intro/Frame.svg"
          />
        </Group>
        <Group>
          <Text color="#101010" fz={32} fw={400}>
            Mission
          </Text>
        </Group>
        <Group>
          <Text color="#636363" fz={18}>
            Working towards creating smart solutions in this digital age
          </Text>
        </Group>
      </Card>
    </Group>
  );
};

export default CompanyIntroduction;
