"use client";
import {
  Autocomplete,
  Button,
  Container,
  Grid,
  Group,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <>
      <div
        style={{
          paddingLeft: "3%",
          paddingRight: "3%",
          paddingTop: "6%",
          paddingBottom: "6%",
        }}
      >
        <Grid>
          <Grid.Col xs={12} md={6}>
            <Group position="left" pt="md" pl="lg">
              <Text fz={40}>We’d Love to Hear from You!</Text>
            </Group>
            <Group position="left" pt="md" pl="lg">
              <Text fz={18}>
                {" "}
                Please submit your information and a Techcraft representative
                will get in touch with you.
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col span={6}></Grid.Col>
        </Grid>

        <Grid p="xl">
          <Grid.Col md={8}>
            <form>
              <Grid>
                <Grid.Col md={6}>
                  <TextInput
                    size="lg"
                    radius="lg"
                    placeholder="Your name"
                    withAsterisk
                  />
                </Grid.Col>
                <Grid.Col md={6}>
                  <TextInput
                    size="lg"
                    radius="lg"
                    placeholder="Your Email"
                    withAsterisk
                  />
                </Grid.Col>
              </Grid>
              <Grid pb="lg" pt="lg">
                <Grid.Col md={5}>
                  <TextInput
                    size="lg"
                    radius="lg"
                    placeholder="Your Phone"
                    withAsterisk
                  />
                </Grid.Col>
                <Grid.Col md={4}>
                  <Autocomplete
                    size="lg"
                    radius="xl"
                    placeholder="Company size"
                    data={["React", "Angular", "Svelte", "Vue"]}
                  />
                </Grid.Col>
                <Grid.Col md={3}>
                  <Autocomplete
                    size="lg"
                    radius="xl"
                    placeholder="Budget"
                    data={["React", "Angular", "Svelte", "Vue"]}
                  />
                </Grid.Col>
              </Grid>
              <Textarea placeholder="Your message" size="xl" />

              <Group position="right" pt="xl">
                <Button
                  style={{ backgroundColor: "#1545B3", color: "white" }}
                  color="indigo"
                  radius="xl"
                  size="lg"
                >
                  Send Message
                </Button>
              </Group>
            </form>
          </Grid.Col>
          <Grid.Col xs={12} md={4}>
            <Group align="center">
              <Container pt="xl">
                <Text fz={30}>Help</Text>
                <p>
                  Need help? Email us directly{" "}
                  <a
                    href="mailto:info@techcraft.co.tz"
                    style={{ color: "blue" }}
                  >
                    info@techcraft.co.tz
                  </a>{" "}
                  or call us at
                </p>
                <p>+255 745 470 673</p>
              </Container>
            </Group>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
};

export default Contact;
