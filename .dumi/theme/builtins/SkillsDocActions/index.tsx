import React from 'react';
import { DownloadOutlined, GithubOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Typography } from 'antd';

import useLocale from '../../../hooks/useLocale';
import { githubRepoUrl, skillsDocLocales, skillsDownloadUrl } from '../SkillsDoc/common';

const { Text } = Typography;

const SkillsDocActions: React.FC = () => {
  const [locale] = useLocale(skillsDocLocales);

  return (
    <>
      <Space direction="vertical" size="small">
        <Space wrap>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            href={skillsDownloadUrl}
            target="_blank"
            rel="noreferrer"
          >
            {locale.downloadButton}
          </Button>
          <Button icon={<GithubOutlined />} href={githubRepoUrl} target="_blank" rel="noreferrer">
            {locale.githubButton}
          </Button>
        </Space>
        <Text type="secondary">
          {locale.downloadNotePrefix}
          <Text code>.skills</Text>
          {locale.downloadNoteSuffix}
        </Text>
      </Space>
      <Divider />
    </>
  );
};

export default SkillsDocActions;
