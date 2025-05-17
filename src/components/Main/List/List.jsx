import React,{useState, useRef, useEffect} from "react";
import Card from "./Card";
import data from "./data.js";
import './List.css';


const List = () => {


  // Estado inicial del array de destinos
  const [items, setItems] = useState(data); // [{},{},{}]

  // Estado inicial del formulario
  const [values, setValues] = useState({
    title: "",
    description: "",  
  });

  const inputRef = useRef(""); // esta referencia será un string vacío al principio

  const handleButtonClick = () => {
    // Validación con regex aquí
    // El dato está guardado en inputRef.current.value
    alert(`Te enviamos la info a tu correo: ${inputRef.current.value}`);
  };

  const paintData = () =>
    items.map((item, index) => (
      <Card key={index} data={item} remove={() => removeItem(index)} />
    ));

  const removeAllItems = () => setItems([]);
  const resetItems = () => setItems(data);

  const [showSubmit, setShowSubmit] = useState(true);


  // nombre array -> items
  // borrar el item en la posición i
  // solo puedes usar items y setItems
  const removeItem = (i) => {
    const remainingItems = items.filter((item, index) => index !== i);
    setItems(remainingItems);
  };
  const addItem = (new_item) => {
    setItems([...items,new_item]);
    
  }
  // Tarea
  const editItem = (i,new_item) => {}

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // const [, setNewTitle] = useState('');
  // const [, setNewDescription] = useState('');

  const titleRef = useRef(null); //crear referencias vacias
  const descriptionRef = useRef(null);

  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    addItem(values);

    titleRef.current.value = ''; 
    descriptionRef.current.value = '';

    
  };

  useEffect(() => {

    
    if (!values.title && !values.description) return; // Si no hay texto en los inputs no iniciar el temporizador
    
    const timer = setTimeout(() => { // Iniciar un temporizador de 20 segundos
      
      if (titleRef.current) titleRef.current.value = '';
      if (descriptionRef.current) descriptionRef.current.value = '';
      // Vaciar los inputs con ref
      setShowSubmit(false); // ocultar botón crear tareaa

  
      console.log('ocultando datos usuario');
    }, 20000); // 20 segundos
  
    setShowSubmit(true);//se vuelve a mostar si se escribe de nuevo

    //Limpia el temporizador si el usuario sigue escribiendo antes de los 20s
    return () => clearTimeout(timer); 
    
  }, 

  [values]);

  return (
    <section>
      <h3>Tareas</h3>
      {/* Comunicación por props  */}
      {/* <TravelItem data={datos[0]}/>
    <TravelItem data={datos[1]}/>
    <TravelItem data={datos[2]}/>
    <TravelItem data={datos[3]}/> */}

      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Título</label><br />
        <input type="text" name="title" ref={titleRef} required onChange={handleChange} /><br />

        <label htmlFor="description">Description</label><br />
        <input type="text" name="description" ref={descriptionRef} required onChange={handleChange} /><br />

       
       <br/>
       {values.title && values.description && showSubmit?
       <button type="submit">Crear tarea</button>:
       <h6>Rellena todos los campos para poder enviar</h6>
      }
       
        
        
      </form>

      {paintData()}
      <br/>
      <button onClick={removeAllItems}>Borrar todo</button>
      <button onClick={resetItems}>Recargar</button>
      <button onClick={() => removeItem(1)}>Borrar tarea</button>
    
    
    
    
    </section>
  );
};

export default List;
