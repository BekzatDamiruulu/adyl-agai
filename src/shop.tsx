import { Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { Modal } from "antd";

import { Card, Input } from "antd";

const { Meta } = Card;
const { RangePicker } = DatePicker;
export function Shop() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoadingCategories, setLoadingCategories] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [SoledProducts, setSoledProducts] = useState<SoledProduct[]>([]);
  const [showAllProducts, setShowAll] = useState(true);
  const [soledDate, setSoledDate] = useState<SoledDates | null>(null);
  useEffect(() => {
    setLoadingCategories(true);
    axios.get("http://192.168.43.255/shop/categories").then((r) => {
      if (r.status == 200) {
        setCategories(r.data);
        setLoadingCategories(false);
      }
    });
  }, []);
  const [categoryId, setCId] = useState(1);
  console.log(soledDate);
  useEffect(() => {
    axios
      .get("http://192.168.43.255/shop/soled-dates?categoryId=" + categoryId)
      .then((r) => {
        if (r.status == 200) {
          console.log(r.data);
          if (r.data.startDate && r.data.endDate) {
            setSoledDate({
              startDate: r.data.startDate,
              endDate: r.data.endDate,
            });
          }
        }
      });
    if (showAllProducts) {
      axios
        .get("http://192.168.43.255/shop/products?categoryId=" + categoryId)
        .then((r) => {
          if (r.status == 200) {
            setProducts(r.data);
          }
        });
    } else {
      axios
        .get(
          `http://192.168.43.255/shop/soled-products?startDate=${soledDate?.startDate}&endDate=${soledDate?.endDate}&categoryId=${categoryId}`
        )
        .then((r) => {
          console.log(r.data);
          if (r.status == 200) {
            setProducts([]);
            setSoledProducts(r.data);
          }
        });
    }
  }, [categoryId, showAllProducts]);
  useEffect(() => {
    if (soledDate && !showAllProducts) {
      axios
        .get(
          `http://192.168.43.255/shop/soled-products?startDate=${soledDate?.startDate}&endDate=${soledDate?.endDate}&categoryId=${categoryId}`
        )
        .then((r) => {
          if (r.status == 200) {
            setProducts([]);
            setSoledProducts(r.data);
          }
        });
    }
  }, [soledDate, categoryId]);
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    if (e.target.value == 1) {
      setShowAll(true);
      setSoledProducts([]);
    } else {
      setShowAll(false);
      setProducts([]);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const [pname, setP] = useState("");
  const [imageUrl, setImage] = useState("");
  const [price, setPrice] = useState<number>(0);
  const handleCancel = () => {
    setIsModalOpen(false);
    setP("");
    setImage("");
    setPrice(0);
  };
  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
    axios
      .post(`http://192.168.43.255:80/shop/product?categoryId=${categoryId}`, {
        name: pname,
        price: price,
        imageUrl: imageUrl,
      })
      .then((r) => {
        if (r.status == 200) {
          alert("cоздан!");
          setProducts([...products, r.data]);
          setP("");
          setImage("");
          setPrice(0);
        } else {
          alert("ошибка при создании");
        }
      });
  };

  const [modal, setModal] = useState(false);
  const [sPro, setSPro] = useState(0);
  const showModal2 = (pid: number) => {
    setSPro(pid);
    setModal(true);
  };
  const [count, setCount] = useState(0);
  const handleCancel2 = () => {
    setModal(false);
  };

  const handleOk2 = () => {
    setTimeout(() => {
      setModal(false);
    }, 300);
    axios
      .post(
        `http://192.168.43.255/shop/soled-product?productId=${sPro}&quantity=${count}`
      )
      .then((r) => {
        console.log(r);
        alert("продано");
        setCount(0);
      });
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Select
          defaultValue={1}
          onChange={(c) => {
            setCId(c);
          }}
          style={{ width: 300 }}
          loading={isLoadingCategories}
          options={categories.map((c) => ({
            value: c.id,
            label: c.name,
          }))}
        />
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>Показать все</Radio>
          <Radio value={2}>Показать проданные</Radio>
        </Radio.Group>
        <Space direction="vertical" size={12}>
          {soledDate && !showAllProducts ? (
            <RangePicker
              defaultValue={[
                dayjs(soledDate?.startDate), // Преобразование стартовой даты
                dayjs(soledDate?.endDate).add(1, "day"), // Преобразование конечной даты
              ]}
            />
          ) : null}
        </Space>
        <Button onClick={showModal} type="primary">
          Создать продукт
        </Button>
      </div>
      <h2>{showAllProducts ? "Продукты" : "Проданные продукты"}</h2>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {products.map((p, i) => {
          return (
            <Card
              key={p.id}
              style={{ width: 300 }}
              cover={<img alt="example" src={p.imageUrl} />}
              actions={[]}
            >
              <Meta
                title={`${i + 1}.${p.productName}`}
                description={`цена: ${p.price}`}
              />
              <Button
                style={{ marginTop: 8 }}
                type="primary"
                onClick={() => showModal2(p.id)}
              >
                Продать
              </Button>
              <Modal
                title="Продать"
                open={modal}
                onOk={handleOk2}
                onCancel={handleCancel2}
              >
                <label htmlFor="count">
                  <b>Количество</b>
                  <Input
                    onChange={(e) => setCount(+e.target.value)}
                    style={{ marginTop: 12 }}
                    value={count}
                    type="number"
                    name="count"
                    placeholder="Количество продуктов"
                  />
                </label>
              </Modal>
            </Card>
          );
        })}

        {SoledProducts.map((p) => {
          return (
            <Card
              key={p.id}
              style={{ width: 300 }}
              cover={<img alt="example" src={p.imageUrl} />}
              actions={[]}
            >
              <Meta
                title={`Продано: ${p.quantity}`}
                description={`Общая цена: ${p.summa}`}
              />
            </Card>
          );
        })}
      </section>
      <Modal
        title="Создать продукт"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          onChange={(e) => setP(e.target.value)}
          placeholder="Название продукта"
          value={pname}
        />
        <Input
          style={{ marginTop: 12 }}
          onChange={(e) => setImage(e.target.value)}
          placeholder="URL картинки"
          value={imageUrl}
        />
        <Input
          onChange={(e) => setPrice(+e.target.value)}
          style={{ marginTop: 12 }}
          type="number"
          value={price}
          placeholder="Цена продукта"
        />
      </Modal>
    </div>
  );
}

interface Category {
  id: number;
  name: string;
}
interface SoledDates {
  startDate: string;
  endDate: string;
}

interface IProduct {
  id: number;
  productName: string;
  price: number;
  imageUrl: string;
}

interface SoledProduct {
  id: number;
  productName: string;
  quantity: number;
  summa: number;
  imageUrl: string;
}
