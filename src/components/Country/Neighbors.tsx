import {Link} from 'react-router-dom';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import {baseUrl} from '../../data/data';
import {useState} from 'react';
import Neighbor from './Neighbor';

interface Props {
  neighborList: [name: string];
}

const Neighbors = ({neighborList}: Props) => {
  return (
    <div className=' flex flex-wrap gap-2'>
      {neighborList.map((name, idx) => {
        return <Neighbor key={idx} neighborNickname={name} />;
      })}
    </div>
  );
};

export default Neighbors;
