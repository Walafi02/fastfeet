import React, {useMemo} from 'react';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

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

export default function Delivery({product, created_at, city, status}) {
  const dateFormated = useMemo(
    () => format(parseISO(created_at), 'dd/MM/yyyy', {locale: pt}),
    [created_at]
  );

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
          <ButtonShowDetails>
            <TextButtonShowDetails>Ver detalhes</TextButtonShowDetails>
          </ButtonShowDetails>
        </FooterView>
      </Footer>
    </Container>
  );
}

Delivery.propTypes = {
  product: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
