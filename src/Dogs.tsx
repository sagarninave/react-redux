import { ChangeEvent, ReactElement, useState } from "react";
import { IDog, useGetDogsListQuery } from "./redux/api";

const Dogs = () => {
  const [count, setCount] = useState<number>(1);
  const { data, isLoading, isError } = useGetDogsListQuery(count);
  return (
    <>
      <select
        value={count}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          setCount(Number(event.target?.value))
        }
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      {isLoading && <h1> Loading...</h1>}
      {isError && <h1> Something went wrong...</h1>}

      {data?.map(
        (dog: IDog): ReactElement => (
          <div key={dog?.id}>
            <h4> {dog?.id}</h4>
            <img src={dog?.url} alt={dog?.id} width="200px" loading="lazy" />
          </div>
        )
      )}
    </>
  );
};

export default Dogs;
