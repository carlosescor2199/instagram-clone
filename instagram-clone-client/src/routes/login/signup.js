import React from 'react'
import {Link} from 'react-router-dom'
import {Divider, Form, Button, Icon, Image, Message} from 'semantic-ui-react'
import _find from 'lodash/find'

export default ({styles, handleClick, handleSubmit, handleChange, args, errors}) => {
    
    return (
        <div>
            <div style={styles.box}>
                <Image src="images/instagram.png" alt="logo" fluid/>
                <h4>Regístrate para ver fotos y videos de tus amigos.</h4>
                <Form onSubmit={(e)=>handleSubmit(e, args)}>
                <Button color="facebook">
                    <Icon name="facebook" />Iniciar sesión con facebook
                    </Button>
                    <br/><br/>
                    <Divider horizontal>O</Divider>
                    <Form.Field>
                        <Form.Input onChange={handleChange} name="email" type="text" placeholder="Correo electronico" icon={!errors.length ? null : _find(errors, {path: 'email'}) ? <Icon name="times circle outline" color="red" size="large" /> : <Icon name="check circle outline" color="green" size="large" />} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input onChange={handleChange} name="fullname" type="text"  placeholder="Nombre completo" icon={!errors.length ? null : _find(errors, {path: 'fullname'}) ? <Icon name="times circle outline" color="red" size="large" /> : <Icon name="check circle outline" color="green" size="large" />} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input onChange={handleChange} name="username" type="text" placeholder="Nombre de usuario" icon={!errors.length ? null : _find(errors, {path: 'username'}) ? <Icon name="times circle outline" color="red" size="large" /> : <Icon name="check circle outline" color="green" size="large" />} />
                    </Form.Field>
                    <Form.Field>
                    <Form.Input onChange={handleChange} name="password" type="password" placeholder="Password" icon={!errors.length ? null : _find(errors, {path: 'password'}) ? <Icon name="times circle outline" color="red" size="large" /> : <Icon name="check circle outline" color="green" size="large" />} />
                    </Form.Field>
                    <Button type="submit" disabled={!args.email || !args.username || !args.fullname || !args.password} primary fluid>Registrate</Button>
                    
                    {
                        errors.length ? <Message negative header="Error(s)"
                        list={errors.map(error => `[${error.path}] ${error.message}`)} /> : null
                    }
                    
                    <Link to="">¿Olvidaste tu contraseña?</Link>
                </Form>
            </div>
            <div style={styles.box}>
                <p>¿Tienes una cuenta? Inicia sesión  <Link to="" onClick={handleClick}>Inicia sesión</Link></p>
            </div>

        </div>
    )
}