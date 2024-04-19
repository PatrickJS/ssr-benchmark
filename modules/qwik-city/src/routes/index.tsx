import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { testData } from "testdata";

type TestData = Awaited<ReturnType<typeof testData>>;

export function Entry(props: { id: string; name: string }) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
    </tr>
  );
}

export default component$(() => {
  const serverData = useResource$<TestData>(() => testData());
  return (
    <Resource
      value={serverData}
      onResolved={(data) => {
        return (
          <table>
            <tbody>
              <>
                {data.map((entry, i) => (
                  <Entry key={i} id={entry.id} name={entry.name} />
                ))}
              </>
            </tbody>
          </table>
        );
      }}
    />
  );
});
