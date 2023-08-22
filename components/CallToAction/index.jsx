"use client";

import { Button, Container, Flex, Group, Highlight, Text } from "@mantine/core";

const CallToAction = () => {
  return (
    <div style={{ padding: "5%" }}>
      <div className="callToAcrion">
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
            project. Whether you're just getting started or need assistance with
            a specific phase, we've got you covered
          </p>
        </Container>

        <Group position="center" pt="xl" pb="xl">
          <Button
            className="rounded-lg bg-primary"
            variant="filled"
            size="lg"
            color="green"
          >
            Contact us
          </Button>
        </Group>
      </div>
    </div>
  );
};

export default CallToAction;
