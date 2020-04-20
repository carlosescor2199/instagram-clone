import React from 'react'
import {Link} from 'react-router-dom'
import {Divider, Form, Button, Icon, Image, Message} from 'semantic-ui-react'
import _find from 'lodash/find'

export default ({styles, handleClick, handleSubmit, handleChange, args, errors}) => {
    
    return (
        <div>
            <div style={styles.box}>
                <Image src="images/instagram.png" alt="logo" fluid />
                <Form onSubmit={(e)=>handleSubmit(e, args)}>
                    <Form.Field>
                        <Form.Input onChange={handleChange} name="username" type="text" placeholder="Nombre de usuario" icon={!errors.length ? null : _find(errors, {path: 'username'}) ? <Icon name="times circle outline" color="red" size="large" /> : <Icon name="check circle outline" color="green" size="large" />} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input onChange={handleChange} name="password" type="password" placeholder="Password" icon={!errors.length ? null : _find(errors, {path: 'password'}) ? <Icon name="times circle outline" color="red" size="large" /> : null} />
                    </Form.Field>
                    <Button type="submit" primary fluid>Iniciar sesión</Button>
                    <Divider horizontal>O</Divider>
                    <Button color="facebook">
                        <Icon name="facebook" />Iniciar sesión con facebook
                    </Button>
                    {
                        errors.length?<Message negative header="Los siguientes errores:"
                        list={errors.map(error=>`[${error.path}] ${error.message}`)} />:null
                    }
                    <br/><br/>
                    <Link to="">¿Olvidaste tu contraseña?</Link>
                </Form>
            </div>
            <div style={styles.box}>
                <p>¿No tienes una cuenta?  <Link to="" onClick={handleClick}>Registrate</Link></p>
            </div>

        </div>
    )
}