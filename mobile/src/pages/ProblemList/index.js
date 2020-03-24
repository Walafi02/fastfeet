import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import api from '~/services/api';
import {Background} from '~/components';
import {dateFormated} from '~/util';

import {
  ProblemsList,
  Title,
  Problem,
  TextProblemsDescription,
  ProblemsDate,
  ViewProblemsDescription,
  ViewProblemsDate,
  EmptyProblems,
  Icon,
  EmptyProblemsText,
} from './styles';

export default function ProblemList({route}) {
  const {id} = useSelector(state => state.user.profile);
  const {delivery_id, product} = route.params;

  const [problems, setProblems] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  async function loadProblems(page = 1, oldProblems = []) {
    setPages(page);
    const {data} = await api.get(
      `deliveryman/${id}/delivery/${delivery_id}/problems`,
      {
        params: {
          page,
        },
      }
    );
    setTotalPages(data.pages);

    const newProblems = data.docs.map(problem => ({
      ...problem,
      dateFormated: dateFormated(problem.created_at),
    }));

    setProblems([...oldProblems, ...newProblems]);
  }

  function refreshList() {
    loadProblems();
  }

  function loadMore() {
    if (totalPages !== pages) loadProblems(pages + 1, problems);
  }

  useEffect(() => {
    if (id && delivery_id) loadProblems();
  }, [id, delivery_id]); // eslint-disable-line

  return (
    <Background>
      <>
        <Title>{product}</Title>
        {problems.length > 0 ? (
          <ProblemsList
            data={problems}
            keyExtractor={item => String(item.id)}
            onRefresh={refreshList}
            refreshing={false}
            onEndReachedThreshold={0.2}
            onEndReached={loadMore}
            renderItem={({item}) => (
              <Problem>
                <ViewProblemsDescription>
                  <TextProblemsDescription>
                    {item.description}
                  </TextProblemsDescription>
                </ViewProblemsDescription>
                <ViewProblemsDate>
                  <ProblemsDate>{item.dateFormated}</ProblemsDate>
                </ViewProblemsDate>
              </Problem>
            )}
          />
        ) : (
          <EmptyProblems>
            <Icon name="report-problem" size={100} color="#0000001a" />
            <EmptyProblemsText>Sem Problemas Cadastrados</EmptyProblemsText>
          </EmptyProblems>
        )}
      </>
    </Background>
  );
}

ProblemList.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      delivery_id: PropTypes.number,
      product: PropTypes.string,
    }),
  }).isRequired,
};
