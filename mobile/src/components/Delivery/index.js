import React, {useMemo} from 'react';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import {CommonActions} from '@react-navigation/native';

import TimeLine from './TimeLine';

import {
  Container,
  Icon,
  HeaderTitle,
  Title,
  Footer,
  FooterView,
  Label,
  Data,
  ButtonShowDetails,
  TextButtonShowDetails,
} from './styles';

export default function Delivery({
  navigation,
  id,
  product,
  created_at,
  city,
  status,
}) {
  const dateFormated = useMemo(
    () => format(parseISO(created_at), 'dd/MM/yyyy', {locale: pt}),
    [created_at]
  );

  function handlePress() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Details',
      })
    );
  }

  return (
    <Container>
      <HeaderTitle>
        <Icon name="local-shipping" size={30} color="#7d40e7" />
        <Title>
          {product.length > 25 ? `${String(product).slice(0, 22)}...` : product}
        </Title>
      </HeaderTitle>

      <TimeLine status={status} />

      <Footer>
        <FooterView>
          <Label>Data</Label>
          <Data>{dateFormated}</Data>
        </FooterView>
        <FooterView>
          <Label>Cidade</Label>
          <Data>{city}</Data>
        </FooterView>
        <FooterView>
          <ButtonShowDetails onPress={() => handlePress()}>
            <TextButtonShowDetails>Ver detalhes</TextButtonShowDetails>
          </ButtonShowDetails>
        </FooterView>
      </Footer>
    </Container>
  );
}

Delivery.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  product: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
