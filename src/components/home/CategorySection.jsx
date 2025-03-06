import styled from "styled-components";
import { Link } from "react-router-dom";
import { categories } from "../../assets/Data/Categories";

const CategoryWrapper = styled.div`
  padding: 40px 160px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 32px;
`;

const CategoryGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const CategoryCard = styled(Link)`
  width: 15%;
  height: 128px;
  background-color: #4d4d4d;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #a5a5a5;
  text-decoration: none;

  &:hover {
    background-color: #e5e5e5;
  }
`;

function CategorySection() {
  return (
    <CategoryWrapper>
      <Title>Browse By Category</Title>
      <CategoryGrid>
        {categories.map((category) => (
          <CategoryCard key={category.name} to={`/products${category.link}`}>
            {category.icon}
            {category.name}
          </CategoryCard>
        ))}
      </CategoryGrid>
    </CategoryWrapper>
  );
}

export default CategorySection;
