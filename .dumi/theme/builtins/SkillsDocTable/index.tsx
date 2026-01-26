import React, { useMemo } from 'react';
import type { TableProps } from 'antd';
import { Table, Typography } from 'antd';

import useLocale from '../../../hooks/useLocale';
import { buildCopyCommand, componentSkills, skillsDocLocales } from '../SkillsDoc/common';

const { Text } = Typography;

interface ComponentSkillRecord {
  name: string;
  description: string;
}

const SkillsDocTable: React.FC = () => {
  const [locale, lang] = useLocale(skillsDocLocales);

  const data = useMemo<ComponentSkillRecord[]>(
    () =>
      componentSkills.map((item) => ({
        name: item.name,
        description: item.description[lang],
      })),
    [lang],
  );

  const columns = useMemo<TableProps<ComponentSkillRecord>['columns']>(
    () => [
      {
        title: locale.component,
        dataIndex: 'name',
        key: 'name',
        width: 160,
        render: (name: string) => <Text strong>{name}</Text>,
      },
      {
        title: locale.description,
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: locale.copyCommand,
        dataIndex: 'name',
        key: 'copy',
        render: (name: string) => (
          <Text code copyable={{ text: buildCopyCommand(name) }}>
            {buildCopyCommand(name)}
          </Text>
        ),
      },
    ],
    [locale],
  );

  return (
    <Table<ComponentSkillRecord>
      columns={columns}
      dataSource={data}
      pagination={false}
      size="small"
      rowKey="name"
    />
  );
};

export default SkillsDocTable;
