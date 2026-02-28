// src/App.tsx
import React from "react";
import Button from "./component/Button/Button";
import {Label }from "./component/Label/Label";
import {Text} from "./component/Text/Text";
import Dropdown from "./component/Dropdown/Dropdown";
import RadioButton from "./component/RadioButton/RadioButton";
import Img from "./component/Img/Img";
import HeroImage from "./component/HeroImage/HeroImage";
import Card from "./component/Card/Card";
import Table from "./component/Table/Table";
import TableHeader from "./component/Table/TableHeader";
import TableRow from "./component/Table/TableRow";
import TableCell from "./component/Table/TableCell";
import TableFooter from "./component/Table/TableFooter";

import styled from "styled-components";

// Container for demo layout
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  display: grid;
  gap: 30px;
`;

// Section wrapper
const Section = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

function App() {
  return (
    <Container>
      {/* Buttons */}
      <Section>
        <SectionTitle>Buttons</SectionTitle>
        <Button label="Default Button" />
        <Button label="Disabled Button" disabled />
      </Section>

      {/* Labels */}
      <Section>
        <SectionTitle>Labels</SectionTitle>
        <Label text="Default Label" />
        <Label text="Disabled Label" disabled />
      </Section>

      {/* Text */}
      <Section>
        <SectionTitle>Text</SectionTitle>
        <Text content="This is some text." />
        <Text content="Disabled text." disabled />
      </Section>

      {/* Dropdown */}
      <Dropdown
      options={[
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    ]}/>

      {/* Radio Buttons */}
      <RadioButton
      label="Option A"
      name="exampleRadio"
      value="optionA"
      />

      <RadioButton
      label="Option B"
      name="exampleRadio"
      value="optionB"
      disabled
      />

      {/* Images */}
      <Section>
        <SectionTitle>Images</SectionTitle>
        <Img src="https://via.placeholder.com/150" alt="Sample" />
        <HeroImage imageUrl="https://via.placeholder.com/600x200" title="Hero Sample" />
      </Section>

      {/* Cards */}
      <Card
      title="Sample Card"
      content="This is a card description"
      />


      {/* Table */}
      <Section>
        <SectionTitle>Table</SectionTitle>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Header 1</TableCell>
              <TableCell>Header 2</TableCell>
            </TableRow>
          </TableHeader>
          <tbody>
            <TableRow>
              <TableCell>Row 1 Col 1</TableCell>
              <TableCell>Row 1 Col 2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Row 2 Col 1</TableCell>
              <TableCell>Row 2 Col 2</TableCell>
            </TableRow>
          </tbody>
          <TableFooter>
            <TableRow>
              <TableCell>Footer 1</TableCell>
              <TableCell>Footer 2</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Section>
    </Container>
  );
}

export default App;