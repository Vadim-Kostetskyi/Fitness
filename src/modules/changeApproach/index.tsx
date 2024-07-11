import React, { Dispatch, FC } from "react";
import { View } from "react-native";
import ApproachButton from "@/src/components/ApproacheButton";
import SelectNumberWithArrows from "@/src/components/SelectNumberWithArrows.tsx";
import { useTranslation } from "react-i18next";

interface ChangeApproachProps {
  // amount: number;
  approach: number;
  quantity: [number, number, number];
  weight: [number, number, number];
  setWeight: Dispatch<React.SetStateAction<[number, number, number]>>;
  setQuantity: Dispatch<React.SetStateAction<[number, number, number]>>;
}

const ChangeApproach: FC<ChangeApproachProps> = ({
  setQuantity,
  setWeight,
  // amount,
  approach,
  weight,
  quantity,
}) => {
  const { t } = useTranslation();

  const add =
    (
      set: Dispatch<React.SetStateAction<[number, number, number]>>,
      number: number
    ) =>
    () => {
      set(
        (prev) =>
          prev.map((value, index) =>
            index === approach ? value + number : value
          ) as [number, number, number]
      );
    };

  const changeWeight = (amount: number) => {
    setWeight(
      (prev: [number, number, number]) =>
        prev.map((value, index) =>
          index === approach ? value + amount : value
        ) as [number, number, number]
    );
  };
  const changeQuantity = (amount: number) => {
    setQuantity(
      (prev: [number, number, number]) =>
        prev.map((value, index) =>
          index === approach ? value + amount : value
        ) as [number, number, number]
    );
  };

  return (
    <>
      <SelectNumberWithArrows
        title={t("numberOfRepeats")}
        amount={quantity[approach]}
        setChange={changeQuantity}
      />
      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        <ApproachButton
          add={add(setQuantity, -10)}
          digit={"-10"}
          disable={quantity[approach] < 10}
        />
        <ApproachButton add={add(setQuantity, 10)} digit={"+10"} />
      </View>
      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        <ApproachButton
          add={add(setQuantity, -50)}
          digit={"-50"}
          disable={quantity[approach] < 50}
        />
        <ApproachButton add={add(setQuantity, 50)} digit={"+50"} />
      </View>
      <SelectNumberWithArrows
        title={t("weight")}
        amount={weight[approach]}
        setChange={changeWeight}
        doubleChange={true}
      />
    </>
  );
};

export default ChangeApproach;
