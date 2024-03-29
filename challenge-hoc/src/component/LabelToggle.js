import WithToggle from '../shared/WithToggle';

const LabelToggle = ({ toggle, toggleStatus, title }) => (
    <div>
        {toggleStatus ? (
            <input type="text" value={title} />
        ) : (
            <span>{title}</span>
        )}
        <div>
            <button onClick={toggle}>{toggleStatus ? 'cancel' : 'edit'}</button>
        </div>
    </div>
);

//arrow function kurung biasa = return (tidak bisa console.log), kurung kurawal tambah return
export default WithToggle(LabelToggle);
