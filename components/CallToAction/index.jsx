"use client";

import { Button, Container, Flex, Group, Highlight, Text } from "@mantine/core";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div style={{ padding: "5%" }}>
      <div
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(9, 25, 62, 0.90) 0%, rgba(9, 25, 62, 0.90) 100%), url(/images/callToAction/rec4.jpeg)",
          backgroundSize: "cover",
        }}
        className="callToAction"
      >
        <Group position="center" p="xl">
          <Text fz={40} fw={500} color="white" align="center" pt="xl">
            <Highlight highlight={["s"]}>
              Starting a new project and need help?
            </Highlight>
          </Text>
        </Group>
        <Container
          style={{
            fontSize: "18px",
            color: "white",
            display: "flex",
            justifyContent: "center",
          }}
          p="lg"
        >
          <p>
            Our team of experts is here to guide you through every step of your
            project. Whether you{`&#39`}re just getting started or need
            assistance with a specific phase, we{`&#39`}ve got you covered
          </p>
        </Container>

        <Group position="center" pt="xl" pb="xl">
          <Link href="/contact">
            <Button
              className="rounded-lg bg-primary"
              variant="filled"
              size="lg"
              color="green"
            >
              Contact us
            </Button>
          </Link>
        </Group>
      </div>
    </div>
  );
};

export default CallToAction;
