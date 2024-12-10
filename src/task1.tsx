import React, { useState } from "react";
import { Table } from "antd";
import { Select, Space } from "antd";
import { Typography } from "antd";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

const { Title } = Typography;
const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  fullname: string;
  fiz: number;
  math: number;
  chem: number;
  bio: number;
  geo: number;
  total: () => number;
}

const data: DataType[] = [
  {
    key: "1",
    fullname: "Мурат Асанов",
    fiz: 20,
    math: 30,
    chem: 90,
    bio: 34,
    geo: 98,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "2",
    fullname: "Айдана Ахметова",
    fiz: 45,
    math: 78,
    chem: 67,
    bio: 54,
    geo: 89,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "3",
    fullname: "Канат Сулейменов",
    fiz: 80,
    math: 65,
    chem: 54,
    bio: 76,
    geo: 43,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "4",
    fullname: "Алия Ержанова",
    fiz: 34,
    math: 45,
    chem: 56,
    bio: 67,
    geo: 89,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "5",
    fullname: "Сергей Павлов",
    fiz: 55,
    math: 77,
    chem: 88,
    bio: 34,
    geo: 50,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "6",
    fullname: "Жанар Алимова",
    fiz: 23,
    math: 44,
    chem: 90,
    bio: 36,
    geo: 75,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "7",
    fullname: "Арман Ермеков",
    fiz: 78,
    math: 88,
    chem: 99,
    bio: 43,
    geo: 54,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "8",
    fullname: "Диана Турсунова",
    fiz: 67,
    math: 65,
    chem: 76,
    bio: 48,
    geo: 39,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "9",
    fullname: "Олег Иванов",
    fiz: 56,
    math: 70,
    chem: 45,
    bio: 67,
    geo: 73,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "10",
    fullname: "Асель Нурбекова",
    fiz: 35,
    math: 85,
    chem: 78,
    bio: 56,
    geo: 92,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
];

const examData: DataType[] = [
  {
    key: "1",
    fullname: "Мурат Асанов",
    fiz: 20,
    math: 30,
    chem: 90,
    bio: 34,
    geo: 98,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "2",
    fullname: "Айдана Ахметова",
    fiz: 45,
    math: 78,
    chem: 67,
    bio: 54,
    geo: 89,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "3",
    fullname: "Канат Сулейменов",
    fiz: 80,
    math: 65,
    chem: 54,
    bio: 76,
    geo: 43,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "4",
    fullname: "Алия Ержанова",
    fiz: 34,
    math: 45,
    chem: 56,
    bio: 67,
    geo: 89,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "5",
    fullname: "Сергей Павлов",
    fiz: 55,
    math: 77,
    chem: 88,
    bio: 34,
    geo: 50,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "6",
    fullname: "Жанар Алимова",
    fiz: 23,
    math: 44,
    chem: 90,
    bio: 36,
    geo: 75,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "7",
    fullname: "Арман Ермеков",
    fiz: 78,
    math: 88,
    chem: 99,
    bio: 43,
    geo: 54,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "8",
    fullname: "Диана Турсунова",
    fiz: 67,
    math: 65,
    chem: 76,
    bio: 48,
    geo: 39,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "9",
    fullname: "Олег Иванов",
    fiz: 56,
    math: 70,
    chem: 45,
    bio: 67,
    geo: 73,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
  {
    key: "10",
    fullname: "Асель Нурбекова",
    fiz: 35,
    math: 85,
    chem: 78,
    bio: 56,
    geo: 92,
    total() {
      return this.fiz + this.math + this.chem + this.bio + this.geo;
    },
  },
];

const Task1: React.FC = function () {
  const [students, setStudents] = useState<DataType[]>(
    data.sort((a, b) => b.bio - a.bio)
  );
  const [count, setC] = useState(0);
  const [all, setAll] = useState(false);
  function getClass(s: Exclude<keyof DataType, "fullname" | "key"> = "fiz") {
    return subject == s ? "red" : "";
  }
  const [subject, setSubj] = useState<Exclude<
    keyof DataType,
    "total" | "fullname" | "key"
  > | null>("bio");

  // module or exam
  const [type, setType] = useState<string>("exam");
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    if (e.target.value == 1) {
      setType("exam");
    } else {
      setType("ьщвгду");
    }
    setValue(e.target.value);
  };
  return (
    <main>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>Экзамен</Radio>
        <Radio value={2}>Модуль</Radio>
      </Radio.Group>
      <Title level={2}>{type == "exam" ? "Экзамен" : "Модуль"}</Title>
      {type == "exam" ? (
        <div>
          <Space style={{ marginBottom: 30 }}>
            <Select
              labelRender={(v) =>
                v.value == 0 ? <b>Баары</b> : <b>алдынкы {v.value} студент</b>
              }
              defaultValue={0}
              style={{ width: 190 }}
              onChange={(value: number) => {
                if (all) {
                  setStudents(
                    data.sort((a, b) => b.total() - a.total()).slice(0, value)
                  );
                  return;
                }
                setC(value);
                if (value == 0) {
                  setStudents(data);
                  return;
                }
                if (subject) {
                  setStudents(
                    data.sort((a, b) => b[subject] - a[subject]).slice(0, value)
                  );
                }
              }}
              options={[
                { value: 3, label: "3 студент" },
                { value: 5, label: "5 студент" },
                { value: 10, label: "10 студент" },
                { value: 0, label: "Баары" },
              ]}
            />
            <Select
              defaultValue="bio"
              style={{ width: 190 }}
              onChange={(value: string) => {
                if (value == "total") {
                  setAll(true);
                  setSubj(null);
                  setStudents(
                    data.sort((a, b) => b.total() - a.total()).slice(0, count)
                  );
                  return;
                } else {
                  setAll(false);
                }
                console.log(subject);
                setSubj(value as typeof subject);
                if (subject) {
                  setStudents(
                    data
                      .sort(
                        (a, b) =>
                          b[value as typeof subject] -
                          a[value as typeof subject]
                      )
                      .slice(0, count)
                  );
                }
              }}
              options={[
                { value: "fiz", label: "Физика" },
                { value: "math", label: "Математика" },
                { value: "chem", label: "Химия" },
                { value: "bio", label: "Биология" },
                { value: "geo", label: "География" },
                { value: "total", label: "Жалпы" },
              ]}
            />
          </Space>
          <Table<DataType> dataSource={students}>
            <Column
              title="Студенттин аты-жону"
              dataIndex="fullname"
              key="fullname"
            />
            <ColumnGroup title="Экзамендер">
              <Column
                className={getClass("fiz")}
                title="Физика"
                dataIndex="fiz"
                key="firstName"
              />
              <Column
                className={getClass("math")}
                title="Математика"
                dataIndex="math"
                key="lastName"
              />
              <Column
                className={getClass("chem")}
                title="Химия"
                dataIndex="chem"
                key="химия"
              />
              <Column
                className={getClass("bio")}
                title="Биология"
                dataIndex="bio"
                key="био"
              />
              <Column
                className={getClass("geo")}
                title="География"
                dataIndex="geo"
                key="геог"
              />
            </ColumnGroup>
            <Column
              className={all ? "red" : ""}
              title="Жалпы баллы"
              dataIndex="total"
              render={(_, record: DataType, i) => {
                return <div key={i}>{record.total()}</div>;
              }}
              key="Жалпы "
            />
          </Table>
        </div>
      ) : (
        <Module />
      )}
    </main>
  );
};

function Module() {
  const [isPass, setIsPass] = useState(true);
  function getClass(s: Exclude<keyof DataType, "fullname" | "key"> = "fiz") {
    return subject == s ? "red" : "";
  }
  const [subject, setSubj] = useState<Exclude<
    keyof DataType,
    "total" | "fullname" | "key"
  > | null>("bio");
  const [students, setStudents] = useState<DataType[]>(
    examData.filter((s) => s["bio"] >= 35)
  );

  function render(v: number) {
    return v >= 35 ? "Кирет" : "Кирбейт";
  }
  return (
    <div>
      <Space style={{ marginBottom: 30 }}>
        <Select
          defaultValue={0}
          style={{ width: 190 }}
          onChange={(value: number) => {
            if (!value) {
              setIsPass(true);
              if (subject) {
                setStudents(examData.filter((s) => s[subject] >= 35));
              }
            } else {
              setIsPass(false);
              if (subject) {
                setStudents(examData.filter((s) => s[subject] < 35));
              }
            }
          }}
          options={[
            {
              value: 0,
              label: "Кирет",
            },
            {
              value: 1,
              label: "Кирбейт",
            },
          ]}
        />
        <Select
          defaultValue={subject}
          style={{ width: 190 }}
          onChange={(value: string) => {
            if (subject) {
              if (isPass) {
                setStudents(
                  examData.filter((s) => s[value as typeof subject] >= 35)
                );
              } else {
                setStudents(
                  examData.filter((s) => s[value as typeof subject] < 35)
                );
              }
            }
            setSubj(value as typeof subject);
          }}
          options={[
            { value: "fiz", label: "Физика" },
            { value: "math", label: "Математика" },
            { value: "chem", label: "Химия" },
            { value: "bio", label: "Биология" },
            { value: "geo", label: "География" },
          ]}
        />
      </Space>
      <Table<DataType> dataSource={students}>
        <Column
          title="Студенттин аты-жону"
          dataIndex="fullname"
          key="fullname"
        />
        <ColumnGroup title="Экзамендер">
          <Column
            className={getClass("fiz")}
            title="Физика"
            dataIndex="fiz"
            key="firstName"
            render={render}
          />
          <Column
            className={getClass("math")}
            title="Математика"
            dataIndex="math"
            key="lastName"
            render={render}
          />
          <Column
            className={getClass("chem")}
            title="Химия"
            dataIndex="chem"
            key="химия"
            render={render}
          />
          <Column
            className={getClass("bio")}
            title="Биология"
            dataIndex="bio"
            key="био"
            render={render}
          />
          <Column
            className={getClass("geo")}
            title="География"
            dataIndex="geo"
            key="геог"
            render={render}
          />
        </ColumnGroup>
      </Table>
    </div>
  );
}

export default Task1;
