import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { singOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo.png';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  return (
    <Container>
      <Content className="flex flex-between flex-center">
        <nav className="flex flex-center">
          <Link to="/deliveries">
            <img src={logo} alt="Fastfeet" />
          </Link>
          <NavLink to="/deliveries" activeClassName="selected">
            Encomendas
          </NavLink>
          <NavLink to="/deliveryman" activeClassName="selected">
            Entregadores
          </NavLink>
          <NavLink to="/recipient" activeClassName="selected">
            Destinatário
          </NavLink>
          <NavLink to="/problems" activeClassName="selected">
            Problémas
          </NavLink>
        </nav>

        <aside>
          <Profile className="flex flex-column">
            <strong title={`${user.name} - ${user.email}`}>{user.name}</strong>
            <button type="button" onClick={() => dispatch(singOut())}>
              sair do sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
