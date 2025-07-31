import { getTag } from '@/libs/microcms';
import TagListItem from '@/components/TagListItem';
import styles from './layout.module.css';

type Props = {
  children: React.ReactNode;
  params: Promise<{
    tagId: string;
  }>;
};

export default async function TagsLayout(props: Props) {
  const params = await props.params;

  const { children } = props;

  const { tagId } = params;
  const tag = await getTag(tagId);
  return (
    <div>
      <p className={styles.title}>
        Tag: <TagListItem tag={tag} hasLink={false} />
      </p>
      <div>{children}</div>
    </div>
  );
}
