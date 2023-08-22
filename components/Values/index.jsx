"use client";
import Image from "next/image";

import SectionTitle from "../Common/SectionTitle";
import { ActionIcon, Card, Group, Text, Grid } from "@mantine/core";
import Data from "./valueData";
import { title } from "process";

const Values = () => {
  return (
    <>
      {/* <Group position="center">
        <Text color="white" fz={40}>
          Why choose us?
        </Text>
      </Group>
      <Group position="center" p="xl">
        <Text color="white" fz={20}>
          Our working mode is guided by our values that we hold close to heart.
          Ensuring that all products we deliver are the by product of these
          values.
        </Text>
      </Group> */}
      <section className=" bg-[url('/images/intro/bg.png')] bg-cover bg-no-repeat  py-16 md:py-20 lg:py-28 ">
        <SectionTitle
          title="Why choose us?"
          paragraph="Our working mode is guided by our values that we hold close to heart. Ensuring that all products we deliver are the by product of these values."
          center
        />
        <Group p="xl">
          <Grid>
            {Data.map((val, index) => {
              return (
                <Grid.Col xs={12} md={3} key={index}>
                  <SingleValue
                    icon={val.icon}
                    title={val.title}
                    description={val.description}
                  />
                </Grid.Col>
              );
            })}
          </Grid>
        </Group>
      </section>
    </>
  );
};

const SingleValue = (props) => {
  return (
    <>
      <Card style={{ backgroundColor: "#1545B3" }}>
        <Group position="center">
          <div
            style={{
              borderRadius: "100%",
              border: "1px solid white",
              background: "white",
              width: "80px",
              height: "80px",
              padding: "3%",
            }}
          >
            {props.icon}
          </div>
        </Group>
        <Group position="center" p="xl">
          <Text color="white" fz={24} fw={400}>
            {props.title}
          </Text>
        </Group>
        <Group position="center" p="xl">
          <Text color="white" fz={14} fw={400}>
            {props.description}
          </Text>
        </Group>
      </Card>
    </>
  );
};

export default Values;
