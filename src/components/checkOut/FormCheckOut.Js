import { Button } from "react-bootstrap";

const FormCheckOut = () => {
    
    return ( 
        <>
        <form className="checkOutForm">
        <div>
            <label htmlFor="nombre">Nombre</label>
            <input
            type="text"
            name="nombre"
            placeholder="John Doe"
            id="nombre"
            />
        </div>
        <div>
            <label htmlFor="correo">Mail</label>
            <input
            type="email"
            name="correo"
            placeholder="mail@mail.com"
            id="correo"
            />
        </div>
        <Button type="submit"></Button>
        </form>
        </>
     );
}
 
export default FormCheckOut;