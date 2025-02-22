interface CheckboxProps {
  id: string;
  nome: string;
  valor: boolean;
  onChange: () => void;
}

const Checkbox = (props: CheckboxProps & { onChange?: () => void }) => {
  return (
    <div key={props.id} className="flex gap-3 items-center">
      <input
        className="w-4 h-4"
        type="checkbox"
        id={props.id}
        checked={props.valor}
        onChange={props.onChange}
      />
      <label htmlFor={props.id}>{props.nome}</label>
    </div>
  );
};
 
export default Checkbox;
