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

import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://chsvxbicdvwmkhfwxcad.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoc3Z4YmljZHZ3bWtoZnd4Y2FkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjY3OTc3MSwiZXhwIjoyMDA4MjU1NzcxfQ.2Xnd8LYHGnxU89hs13YwyrnTfIzkqh-zW_z6Vk2yDcc"
);
const Contact = () => {
  const [size, setSize] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");
  async function formHandler(e: any) {
    e.preventDefault();
    const { data, error } = await supabase
      .from("messages")
      .insert([
        {
          name: name,
          size: "3",
          email: email,
          phone: phone,
          message: message,
          budget: "23",
          readStatus: false,
        },
      ])
      .select();
  }
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
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    size="lg"
                    radius="lg"
                    placeholder="Your name"
                    withAsterisk
                  />
                </Grid.Col>
                <Grid.Col md={6}>
                  <TextInput
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
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
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    size="lg"
                    radius="lg"
                    placeholder="Your Phone"
                    withAsterisk
                  />
                </Grid.Col>
                <Grid.Col md={4}>
                  <Autocomplete
                    value={size}
                    onChange={(e) => {}}
                    size="lg"
                    radius="xl"
                    placeholder="Company size"
                    data={["React", "Angular", "Svelte", "Vue"]}
                  />
                </Grid.Col>
                <Grid.Col md={3}>
                  <Autocomplete
                    value={budget}
                    onChange={(e) => {}}
                    size="lg"
                    radius="xl"
                    placeholder="Budget"
                    data={["React", "Angular", "Svelte", "Vue"]}
                  />
                </Grid.Col>
              </Grid>
              <Textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Your message"
                size="xl"
              />

              <Group position="right" pt="xl">
                <Button
                  onClick={formHandler}
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
